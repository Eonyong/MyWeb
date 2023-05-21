import axios, { AxiosResponse } from 'axios';

const APIs = (): void => {
  const pageNo = 1;
  const topFinGrpNo = '020000';
  const auth = process.env.REACT_APP_OPEN_API_ID;
  const Option = {
    url: `http://finlife.fss.or.kr/finlifeapi/depositProductsSearch.json`,
    method: 'GET',
    params: {
      auth: auth,
      topFinGrpNo: topFinGrpNo,
      pageNo: pageNo,
    },
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET, POST, OPTION',
    },
  };
  axios(Option)
    .then((res: AxiosResponse) => console.log(res))
    .catch(() => console.error('This Fn is Error'));
};

export default APIs;
