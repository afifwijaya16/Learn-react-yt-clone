import React from "react";
import "./_videoMetaData.scss";
import moment from "moment";
import numeral from "numeral";
// icons
import { MdThumbUp, MdThumbDown } from "react-icons/md";

import ShowMoreText from "react-show-more-text";
const VideoMetaData = () => {
  return (
    <div className="videoMetaData py-2">
      <div className="videoMetaData__top">
        <h5>Video Title</h5>
        <div className="d-flex justify-content-between align-items-center py-1">
          <span>
            {numeral(10000).format("0.a")} views • &nbsp;
            {moment("2021-03-10").fromNow()}
          </span>
          <div>
            <span className="mr-3">
              <MdThumbUp size={26} /> {numeral(10000).format("0.a")}
            </span>
            <span className="mr-3">
              <MdThumbDown size={26} /> {numeral(10).format("0.a")}
            </span>
          </div>
        </div>
      </div>
      <div className="videoMetaData__channel d-flex justify-content-between align-items-center my-2 py-3">
        <div className="d-flex">
          <img
            src="https://www.shareicon.net/data/256x256/2016/09/15/829459_man_512x512.png"
            alt="avatar"
            className="rounded-circle mr-3"
          />
          <div className="d-flex flex-column">
            <span>Afif wijaya</span>
            <span>{numeral(1200).format("0.a")} Subcribers</span>
          </div>
        </div>
        <button className="btn border-0 p-2 m-2">Subcribe</button>
      </div>
      <div className="videoMetaData__description">
        <ShowMoreText
          lines={3}
          more="SHOW MORE"
          less="SHOW LESS"
          anchorClass="showMoreText"
          expanded={false}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut dicta
          quasi doloremque voluptates asperiores debitis earum illo, officia
          repellendus magni eveniet, similique odio? Esse, possimus fugiat!
          Dolorum asperiores optio culpa, harum rem sapiente exercitationem sit
          velit perferendis sunt recusandae blanditiis alias quam nostrum, sint
          repudiandae, eius numquam? Numquam placeat quod repellat suscipit,
          repudiandae beatae ipsa esse aperiam voluptatibus eius odit eum quos
          iure deserunt blanditiis quibusdam animi a veritatis recusandae
          perferendis reiciendis corrupti? Error fuga consequuntur repellendus
          hic odit veniam rem dolore blanditiis saepe. Modi illo nobis voluptate
          minus eos vitae deleniti laudantium qui libero beatae maxime eveniet
          quam, hic natus facere corporis. Reiciendis quis animi dolore nam
          fugit magnam molestias. Magnam, soluta quasi? Fugiat voluptatibus cum
          ducimus, cupiditate dolorum saepe sit vitae obcaecati dolorem?
          Mollitia quas fugit eligendi quis harum ducimus consequatur tenetur
          quasi dolorum. Ratione accusamus possimus, incidunt quia quisquam ea
          asperiores id deserunt officia porro commodi quos aut molestias
          obcaecati doloremque nostrum minus? Hic, illum dicta maxime neque cum
          atque. Tempora, est quidem? Provident vero tenetur quam nostrum
          doloribus iusto cumque, laborum sapiente ipsum. Cum est esse ad aut
          autem provident vero, amet facere! Cupiditate nihil, corrupti rerum
          aspernatur quaerat error dolore, quas voluptatum distinctio vitae
          enim?
        </ShowMoreText>
      </div>
    </div>
  );
};

export default VideoMetaData;
