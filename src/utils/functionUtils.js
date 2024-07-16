const formatExpiredProduct = (expiredDate) => {
  // Membuat objek Date dari string expired
  const date = new Date(expiredDate);

  // Array dengan nama bulan dalam bahasa Indonesia
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Mei",
    "Jun",
    "Jul",
    "Ags",
    "Sep",
    "Okt",
    "Nov",
    "Des",
  ];

  // Mendapatkan tanggal, bulan, dan tahun dari objek Date
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  // Format tanggal dalam format "tanggal Bulan tahun"
  const formattedDate = `${day} ${monthNames[monthIndex]} ${year}`;

  return formattedDate;
};

const GetFileNameFromUrlImg = (images_url) => {
  const startIndex = images_url.indexOf("/product%2F") + "/product%2F".length;
  const endIndex = images_url.indexOf("?");
  let fileName = images_url.substring(startIndex, endIndex);

  // Replace %20 with a space
  fileName = fileName.replace(/%20/g, " ");

  return fileName;
};

const GetCurrentDate = () => {
  const date = new Date();
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${year}-${month}-${day}`;
};

export { formatExpiredProduct, GetFileNameFromUrlImg, GetCurrentDate };
