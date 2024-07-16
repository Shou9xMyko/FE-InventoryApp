import { FaExternalLinkAlt } from "react-icons/fa";

const Location = () => {
  return (
    <div className="py-10">
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2 lg:col-span-1 lg:col-start-1 lg:row-start-1 ">
          <p className="text-xl text-gray-900 text-center mb-4 font-medium">
            Waktu Buka
          </p>
          <div className="relative overflow-x-auto w-full flex justify-center">
            <table className="w-[20rem] text-sm border-2 text-center rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-white uppercase bg-fuchsia-700 ">
                <tr className="text-center">
                  <th scope="col" className="px-6 py-3 border-r-2">
                    Hari
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Jam
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800  dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r-2"
                  >
                    Setiap Hari
                  </th>
                  <td className="px-6 py-4">07:00 - 22:00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-start-1 row-start-1 col-span-2 lg:col-start-2 lg:row-start-1 text-center px-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.001060401065!2d106.946923630666!3d-6.393863445818361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6994926e1e46b3%3A0x817bdd15907e77c8!2sToko%20Sembako%20Berkah%20Lestari!5e0!3m2!1sid!2sid!4v1716886469260!5m2!1sid!2sid"
            allowFullScreen
            className="border-2 rounded-md w-full h-[30rem]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="flex items-center justify-center mt-5">
        <a
          href="https://maps.app.goo.gl/hQfdPa994QKHuq5LA"
          className="bg-fuchsia-700 px-6 py-2 text-white flex items-center gap-2 rounded-md font-medium"
          target="_blank"
        >
          Arahkan saya ke Google Maps <FaExternalLinkAlt />
        </a>
      </div>
    </div>
  );
};

export default Location;
