import PictBerkahLestari1 from "/BerkahLestari1.jpg";
import PictBerkahLestari2 from "/BerkahLestari2.jpg";
import PictBerkahLestari3 from "/BerkahLestari3.jpg";
import { Carousel } from "flowbite-react";

const About = () => {
  return (
    <div className="mt-10 mb-12 flex flex-col gap-8 ">
      <h1 className="text-center text-2xl md:text-4xl font-bold text-gray-900 hover:text-fuchsia-700 transition ease duration-200">
        Toko Berkah Lestari
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 px-6 lg:px-10 gap-4 lg:gap-8">
        <div className=" col-start-1 row-start-2 lg:col-start-1 lg:row-start-1">
          <p className="text-md text-justify leading-loose">
            Toko ini didirikan pada tahun 2020 dan berlokasi di Jl. Sukarno
            Joyonegoro 1 No. 5C, Bogor. Toko ini merupakan sebuah usaha dagang
            yang menyediakan berbagai macam barang kebutuhan sehari-hari yang
            umumnya ditemukan di rumah tangga. Produk yang ditawarkan mencakup
            beras, minyak goreng, gula, susu, dan bahan makanan esensial
            lainnya. Selain itu, toko ini juga menyediakan berbagai produk rumah
            tangga lainnya, seperti alat kebersihan, peralatan dapur, dan
            kebutuhan pokok lainnya. Dengan fokus pada kualitas dan harga yang
            terjangkau, toko ini bertujuan untuk menjadi pilihan utama bagi
            masyarakat sekitar dalam memenuhi kebutuhan sehari-hari mereka.
            Pelayanan yang ramah dan profesional juga menjadi prioritas, guna
            memberikan pengalaman berbelanja yang menyenangkan dan memuaskan
            bagi para pelanggan.
          </p>
        </div>

        <div className="flex justify-center items-center">
          <Carousel
            className="h-[48vh] md:h-[70vh] md:w-[75%] lg:w-full lg:h-full"
            slideInterval={3000}
          >
            <img
              src={PictBerkahLestari1}
              className="h-full object-cover"
              alt="Foto Toko Berkah Lestari 3"
            />
            <img
              src={PictBerkahLestari2}
              className="h-full object-cover"
              alt="Foto Toko Berkah Lestari 3"
            />
            <img
              src={PictBerkahLestari3}
              className="h-full object-cover"
              alt="Foto Toko Berkah Lestari 3"
            />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default About;
