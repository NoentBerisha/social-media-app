import React from 'react';
import './MainContent.css';

const MainContent = () => {
    // Dummy data
    const user = {
        name: 'John Doe',
        profilePicture: 'https://via.placeholder.com/40'
    };

    const posts = [
        {
            user: {
                name: 'Jane Smith',
                profilePicture: 'https://via.placeholder.com/40'
            },
            time: '4 hours ago',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            image: 'https://via.placeholder.com/600x400',
            likes: 1200,
            comments: 200,
            shares: 17
        },
        {
            user: {
                name: 'Alex Johnson',
                profilePicture: 'https://via.placeholder.com/40'
            },
            time: '1 day ago',
            content: 'Another example of a post content.',
            image: '',
            likes: 800,
            comments: 150,
            shares: 10
        },
        // Add more dummy posts here...
    ];

    return (
        <div className="main-content">
            <div className="status-update">
                <div className="status-header">
                    <img src={user.profilePicture} alt={user.name} className="profile-pic"/>
                    <input type="text" placeholder="What’s on your mind?" className="status-input"/>
                </div>
                <div className="status-options">
                    <button className="status-option">Go Live</button>
                    <button className="status-option">Photo</button>
                    <button className="status-option">Video</button>
                    <button className="status-option">Feeling</button>
                </div>
            </div>
            {posts.map((post, index) => (
                <div key={index} className="post">
                    <div className="post-header">
                        <img src={post.user.profilePicture} alt={post.user.name} className="post-profile-pic"/>
                        <div>
                            <p className="post-user">{post.user.name}</p>
                            <p className="post-time">{post.time}</p>
                        </div>
                    </div>
                    <div className="post-content">
                        <p>{post.content}</p>
                        {post.image && <img src={post.image} alt="Post content" className="post-image"/>}
                    </div>
                    <div className="post-actions">
                        <span>{post.likes} Likes</span>
                        <span>{post.comments} Comments</span>
                        <span>{post.shares} Shares</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MainContent;
