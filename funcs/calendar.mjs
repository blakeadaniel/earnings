const apiKey = 'cnbcespr01qks5ivf93gcnbcespr01qks5ivf940';

import { format } from 'date-fns';

const calendar = async () => {
  const today = new Date();
  const dateToday = format(new Date(), 'yyyy-MM-dd');
  const dateWeekFromToday = format(
    new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1),
    'yyyy-MM-dd'
  );

  try {
    const data = await fetch(
      `https://finnhub.io/api/v1/calendar/earnings?from=${dateToday}&to=${dateWeekFromToday}&token=${apiKey}`
    ).then(function (response) {
      return response.json();
    });
    const resp = data.earningsCalendar;
    const bmo = resp.filter((x) => x.hour === 'bmo').map((y) => y.symbol);
    const amc = resp.filter((x) => x.hour === 'amc').map((y) => y.symbol);
    console.log(bmo);
  } catch (e) {
    console.log(e);
  }
};

calendar();
