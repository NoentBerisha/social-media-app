import React, { useState } from 'react';
import ProfileIconComponent from '../Main/profile-icon/ProfileIconComponent';
import Modal from '../pop-up/popUpModal';

function FollowersAndFollowing({ initialList, title }) {
    const [list, setList] = useState(initialList);
    const [searchQuery, setSearchQuery] = useState('');
    const [isModalVisible, setModalVisible] = useState(false);
    const [selected, setSelected] = useState(null);

    const handleOpenModal = () => {
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
        setSelected(null);
    };

    const handleConfirm = () => {
        const newList = list.filter((_, i) => i !== selected);
        setList(newList);
        setModalVisible(false);
        setSelected(null);
    };

    const removeFollow = (index) => {
        setSelected(index);
        handleOpenModal();
    }

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    }

    const filteredList = list ? list.filter(follower =>
        follower.name.toLowerCase().includes(searchQuery.toLowerCase())
    ) : [];

    return (
        <div className="profile-followers-container">
            <Modal
                isVisible={isModalVisible}
                title="User Input Required"
                content={<p>Are your sure? If you do this you will have to request to follow again.</p>}
                onClose={handleCloseModal}
                onConfirm={handleConfirm}
            />
            <h2>{title}</h2>
            <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearch}
            />
            <ul>
            {filteredList.length > 0 ? (
                    filteredList.map((follower, index) => (
                        <li key={index}>
                            <div className="profile-icon-icon">
                                <ProfileIconComponent photoUrl={follower.photoUrl} name={follower.name} showStatus={false} />
                            </div>
                            <div className='profile-followers'>
                                <h2>{follower.name}</h2>
                                
                                    <p>Followers: <strong>{follower.followers}</strong></p>
                                    <p>Following: <strong>{follower.following}</strong></p>
                                
                            </div>
                            <button className='remove-follow-button' onClick={() => removeFollow(index)}>Remove</button>
                        </li>
                    ))
                ) : (
                    <p>No {title}</p>
                )}
            </ul>
        </div>
    );
}

export default FollowersAndFollowing;