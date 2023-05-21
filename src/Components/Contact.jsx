import style from "../CSS/contact.module.css";
function Contact({ Userlist }) {
  //   console.log(Userlist);
  return (
    <>
      <div className={style.container}>
        <h1>The list of Contact</h1>

        {Userlist.map((ele) => {
          return (
            <div className={style.child}>
              <div>
                {ele.name.first} {ele.name.last}
              </div>
              <div>
                <img src={ele.picture.large} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Contact;
