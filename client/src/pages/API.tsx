import axios from 'axios';

const APIs = (): any => {
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
    .then((res: any) => console.log(res))
    .catch((err) => console.log(err));
};

export default APIs;
