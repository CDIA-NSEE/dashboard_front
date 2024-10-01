import cientist from "../assets/cientist.svg";
function Banner() {
  return (
    <>
      <section className="bg-blue-maua w-full h-[20rem] flex">
        <div className="flex m-auto px-96">
          <img src={cientist} alt="Cientist Logo" />
          <div className="text-white ml-10">
            <h1 className="text-4xl text-center font-bold">Lorem Ipsum</h1>
            <p className="mt-2 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse aliquam, ligula at interdum placerat, nibh libero
              porttitor est, nec posuere nulla lacus eu nibh. Vivamus imperdiet
              congue enim aliquet pretium. Donec ante urna, consequat eu metus
              in, sagittis consequat justo. Nullam rutrum in nisi vitae
              pulvinar. Pellentesque eu lectus vel massa lacinia vulputate.
              Nullam elementum augue euismod nulla cursus posuere. Praesent
              tempus aliquet dui, quis dignissim felis malesuada eu. Nunc sit
              amet dapibus libero. Nunc non iaculis elit. Sed ac felis feugiat,
              semper ipsum id, gravida orci. Pellentesque a elit justo.
              Curabitur augue turpis, auctor eu turpis sagittis, mollis
              pellentesque arcu. Mauris in diam metus. Aenean tristique nec
              ligula at mattis. Nullam eget pulvinar purus, venenatis fringilla
              libero. Sed commodo metus sit amet nisl porttitor, id finibus
              justo semper. Donec at massa ac nulla posuere blandit. Etiam at
              nunc eget tellus interdum posuere vitae eu neque.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;
