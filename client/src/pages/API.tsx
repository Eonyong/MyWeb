import axios, { AxiosResponse, AxiosError } from 'axios';

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
    },
  };
  axios(Option)
    .then((res: AxiosResponse) => console.log(res))
    .catch((err: AxiosError) => console.log(err));
};

export default APIs;
