import UserImage from "./UserImage";

export default function Header() {
  return (
    <header className="flex justify-between p-5">
      <div className="flex space-x-4">
        <p className="layer_link">About</p>
        <p className="layer_link">Store</p>
      </div>
      <div className="flex space-x-4">
        <p className="layer_link">Gmail</p>
        <p className="layer_link">Images</p>
        <UserImage />
      </div>
    </header>
  );
}
