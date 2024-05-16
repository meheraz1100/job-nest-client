import TypeWrite from "../TypeWrite/TypeWrite";

const Banner = () => {
    return (
        <div>
            <div>
      <div className="carousel w-full h-[600px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src='https://i.ibb.co/hs3BJkw/photo-1521791136064-7986c2920216-w-500-auto-format-fit-crop-q-60-ixlib-rb-4-0.jpg'
            className="w-full rounded-xl"
          />
          <div className="absolute  rounded-xl h-full left-0 items-center flex pl-12 bottom-0 bg-gradient-to-r from-[#407db4] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-7 w-1/2">
                <TypeWrite />
                <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide6" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src='https://i.ibb.co/zFmGGFS/photo-1455849318743-b2233052fcff-w-500-auto-format-fit-crop-q-60-ixlib-rb-4-0.jpg'
            className="w-full rounded-xl"
          />
          <div className="absolute rounded-xl h-full left-0 items-center flex pl-12 bottom-0 bg-gradient-to-r from-[#407db4] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-7 w-1/2">
            <TypeWrite />
                <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>


        <div id="slide3" className="carousel-item relative w-full">
          <img
            src='https://i.ibb.co/9q4Mqrs/photo-1573496130407-57329f01f769-w-500-auto-format-fit-crop-q-60-ixlib-rb-4-0.jpg'
            className="w-full rounded-xl"
          />
          <div className="absolute rounded-xl h-full left-0 items-center flex pl-12 bottom-0 bg-gradient-to-r from-[#407db4] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-7 w-1/2">
            <TypeWrite />
                <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide2" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>


        <div id="slide4" className="carousel-item relative w-full">
          <img
            src='https://i.ibb.co/9mXPrdS/photo-1517245386807-bb43f82c33c4-w-500-auto-format-fit-crop-q-60-ixlib-rb-4-0.jpg'
            className="w-full rounded-xl"
          />
          <div className="absolute rounded-xl h-full left-0 items-center flex pl-12 bottom-0 bg-gradient-to-r from-[#407db4] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-7 w-1/2">
            <TypeWrite />
                <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide3" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide5" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>


        <div id="slide5" className="carousel-item relative w-full">
          <img
            src='https://i.ibb.co/F4bQcJ5/photo-1517245386807-bb43f82c33c4-w-500-auto-format-fit-crop-q-60-ixlib-rb-4-0.jpg'
            className="w-full rounded-xl"
          />
          <div className="absolute rounded-xl h-full left-0 items-center flex pl-12 bottom-0 bg-gradient-to-r from-[#407db4] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-7 w-1/2">
            <TypeWrite />
                <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide6" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div id="slide6" className="carousel-item relative w-full">
          <img
            src='https://i.ibb.co/YXnvNbP/premium-photo-1661492073549-75b5407fdb9d-w-500-auto-format-fit-crop-q-60-ixlib-rb-4-0.jpg'
            className="w-full rounded-xl"
          />
          <div className="absolute rounded-xl h-full left-0 items-center flex pl-12 bottom-0 bg-gradient-to-r from-[#407db4] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-7 w-1/2">
            <TypeWrite />
                <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide5" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Banner;