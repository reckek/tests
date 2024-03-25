const http = require('http');

function sendRequest(url, callback) {
  const startTime = Date.now();
  http.get(url, (res) => {
    const endTime = Date.now();
    const responseTime = endTime - startTime;
    callback(responseTime);
  }).on('error', (error) => {
    console.error(`Error: ${error.message}`);
    callback(null);
  });
}

function performTest(url, numRequests, interval) {
  let completedRequests = 0;
  let totalResponseTime = 0;

  function handleResponse(responseTime) {
    if (responseTime !== null) {
      totalResponseTime += responseTime;
    }
    completedRequests++;
    if (completedRequests === numRequests) {
      const averageResponseTime = totalResponseTime / numRequests;
      console.log(`Average response time: ${averageResponseTime} ms`);
    } else {
      setTimeout(sendRequest, interval, url, handleResponse);
    }
  }

  sendRequest(url, handleResponse);
}

const testUrl = 'https://vsuet.ru';
const numRequests = 1000;
const interval = 100; // Интервал между запросами в миллисекундах
performTest(testUrl, numRequests, interval);