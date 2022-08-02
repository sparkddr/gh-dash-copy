const Repository = (props) => {
  return (
    <div className="flex gap-2 hover: ">
      <img
        src="https://avatars.githubusercontent.com/u/89840995?s=40&v=4"
        className="h-5 object-fill rounded-xl"
        alt="avatar"
      />
      <a href={props.link} className="hover:underline truncate">
        {"sparkddr/" + props.name}
      </a>
    </div>
  );
};
export default Repository;
