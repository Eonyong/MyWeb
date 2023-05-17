import axios, { AxiosResponse } from 'axios';

const APIs = (): void => {
  const pageNo = 1;
  const topFinGrpNo = '020000';
  const auth = process.env.REACT_APP_OPEN_API_ID;
  const Option = {
    url: `https://finlife.fss.or.kr/finlifeapi/companySearch.json?auth=${auth}&topFinGrpNo=${topFinGrpNo}&pageNo=${pageNo}`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${auth}`,
      'Access-Control-Allow-Origin': '*',
    },
  };
  axios(Option)
    .then((res: AxiosResponse) => console.log(res))
    .catch(() => console.error('This Fn is Error'));
};

export default APIs;
