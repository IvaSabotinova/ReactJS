import { useState, useEffect } from "react";
import UserListItem from "./UserListItem";
import * as userService from "../services/userService";
import CreateUserModal from './CreateUserModal'
import UserInfoModal from "./UserInfoModal";
import DeleteUserModal from "./DeleteUserModal";
import Spinner from "./Spinner";

const UserListTable = () => {
    const [users, setUsers] = useState([]);
    const [isShownCreateModal, setCreateModal] = useState(false);
    const [isShownInfoModal, setInfoModal] = useState(false);
    const [selectedUserId, setSelectedUserId] = useState(null);
    const [isShownDeleteModal, setShownDeleteModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        userService.getAll()
            .then(res => setUsers(res))
            .catch(err => console.log(err))
            .finally(()=> setIsLoading(false))
    }, []);

    const showCreateUserModalHandler = () => {
        setCreateModal(true);
    };
    const hideCreateUserModal = () => {
        setCreateModal(false);
    }

    const createUserHandler = async (e) => {
        //Stop page from refreshing
        e.preventDefault();

        //Get data from form data
        const formData = Object.fromEntries(new FormData(e.currentTarget));

        //Create new user at the server
        const newUser = await userService.createUser(formData);

        //Add newly created user to current state by creating new reference (new array)
        setUsers(all => [...all, newUser]);

        //Close the modal
        setCreateModal(false);
    };

    const showUserInfoHandler = async (userId) => {
        setSelectedUserId(userId)
        setInfoModal(true);
    };  

    const hideUserInfoModal = () => {
        setInfoModal(false);
    }

    const onClickDeleteModal = (userId) => {
        setSelectedUserId(userId);      
        setShownDeleteModal(true)
    }

    const closeDelete = () => {
        setShownDeleteModal(false)      
    }

    const deleteUser = async () =>{
       
        await userService.deleteUser(selectedUserId);
        setUsers(users=>users.filter(x=>x._id !== selectedUserId));
        setShownDeleteModal(false)
        
    }


    return (
        <>
            <div className="table-wrapper">
                 {/* <!-- Overlap components  -->

<!-- <div className="loading-shade"> --> */}
{/* <!-- Loading spinner  --> */}


{isLoading && <Spinner/>}

{/* <!--         No users added yet  -->

 <!-- <div className="table-overlap">
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="triangle-exclamation"
        className="svg-inline--fa fa-triangle-exclamation Table_icon__+HHgn"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          fill="currentColor"
          d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"
        ></path>
      </svg>
      <h2>There is no users yet.</h2>
    </div> -->  */}

{/* <!-- No content overlap component  -->

<!-- <div className="table-overlap">
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="triangle-exclamation"
        className="svg-inline--fa fa-triangle-exclamation Table_icon__+HHgn"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          fill="currentColor"
          d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"
        ></path>
      </svg>
      <h2>Sorry, we couldn't find what you're looking for.</h2>
    </div> --> */}

{/* <!-- On error overlap component  -->

<!-- <div className="table-overlap">
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="triangle-exclamation"
        className="svg-inline--fa fa-triangle-exclamation Table_icon__+HHgn"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          fill="currentColor"
          d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"
        ></path>
      </svg>
      <h2>Failed to fetch</h2>
    </div> -->
<!-- </div> -->  */}

                {isShownCreateModal &&
                    <CreateUserModal
                        createUser={createUserHandler}
                        cancelCreateUser={hideCreateUserModal}
                    />}

                {isShownInfoModal &&
                    <UserInfoModal
                        userId={selectedUserId}
                        hideInfoModal={hideUserInfoModal}
                    />}

                {isShownDeleteModal &&
                    < DeleteUserModal
                        onCloseDelete={closeDelete}
                        onDeleteUser={deleteUser}
                    />}

                <table className="table">
                    <thead>
                        <tr>
                            <th>
                                Image
                            </th>
                            <th>
                                First name<svg aria-hidden="true" focusable="false" data-prefix="fas"
                                    data-icon="arrow-down" className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                    <path fill="currentColor"
                                        d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                    </path>
                                </svg>
                            </th>
                            <th>
                                Last name<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                    className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512">
                                    <path fill="currentColor"
                                        d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                    </path>
                                </svg>
                            </th>
                            <th>
                                Email<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                    className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512">
                                    <path fill="currentColor"
                                        d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                    </path>
                                </svg>
                            </th>
                            <th>
                                Phone<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                    className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512">
                                    <path fill="currentColor"
                                        d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                    </path>
                                </svg>
                            </th>
                            <th>
                                Created
                                <svg aria-hidden="true" focusable="false" data-prefix="fas"
                                    data-icon="arrow-down" className="icon active-icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                    <path fill="currentColor"
                                        d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                    </path>
                                </svg>
                            </th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <UserListItem
                                key={user._id}
                                id={user._id}
                                firstName={user.firstName}
                                lastName={user.lastName}
                                email={user.email}
                                phoneNumber={user.phoneNumber}
                                createdAt={user.createdAt}
                                imageUrl={user.imageUrl}
                                showUserInfo={showUserInfoHandler}
                                onClickDeleteModal={onClickDeleteModal}
                             
                            />
                        ))}

                    </tbody>
                </table>
            </div>

            <button onClick={showCreateUserModalHandler} className="btn-add btn">Add new user</button>
        </>
    );
}

export default UserListTable;