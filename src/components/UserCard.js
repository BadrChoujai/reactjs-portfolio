/* eslint-disable jsx-a11y/anchor-is-valid */
import img from "../img/me.jpg";

export const UserCard = (props) => {
  return (
    <div>
      <div className="flex justify-evenly space-x-4">
        <template className="flex justify-evenly items-center m-4 w-full">
          <div>
            <img
              className="h-24 w-24 rounded-full border border-gray-900 object-cover object-center"
              src={img}
              alt="avatar"
            />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-gray-900">
              {`${props.user.name.first} ${props.user.name.last}`}
            </h1>
          </div>
        </template>
      </div>
    </div>
  );
};
