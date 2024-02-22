const earningsHistory = async () => {
  try {
    const data = await fetch(
      'https://www.tipranks.com/stocks/aapl/earnings'
    ).then(function (response) {
      return response.json();
    });
    console.log(data);
  } catch (e) {
    console.log(e);
  }
};

earningsHistory();
