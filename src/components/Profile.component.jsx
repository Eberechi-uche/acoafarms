export function Profile({ image }) {
  return (
    <>
      <div className="image-container-sm ">
        <img src={image} alt=" google logo" className="hover" />
      </div>
    </>
  );
}
