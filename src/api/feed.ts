const instaData = async (callback: any) => {
  const url = 'http://192.168.3.29:3030/feed';
  const response = await fetch(url);
  const dataJson: any = await response.json();

  callback(dataJson);
};

export default instaData;
