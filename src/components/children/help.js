export const show = e => {
  // alert('td');
  // console.log(dataBankInternet.dataInternet[0].text);
  let element = e.target.dataset.name;
  let data = dataBankInternet.dataInternet;
  data.map((value, i) => {
    if (value.bank === element) {
      something = value.text;
      console.log(something);
      return something;
    }

    // console.log(value.text);
  });
};
