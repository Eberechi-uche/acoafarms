export function Profile({ image }) {
  return (
    <>
      <div className="image-container-sm ">
        <img src={image} className="hover"></img>
      </div>
    </>
  );
}
