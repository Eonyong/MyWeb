import axios from 'axios';

const APIs = (): any => {
  const Option = {
    url: `https://finlife.fss.or.kr/finlifeapi/companySearch.json`,
    method: 'GET',
    data: {
      auth: process.env.REACT_APP_API_ID,
      topFinGrpNo: '020000',
      pageNo: '1',
    },
  };
  axios(Option)
    .then((res: any) => console.log(res))
    .catch((err) => console.log(err));
};

export default APIs;
