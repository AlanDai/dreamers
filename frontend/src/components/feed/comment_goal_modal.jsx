// import React from 'react';
// import { Link } from 'react-router-dom';
// import CommentItem from './comment_item';

// class CommentGoalModal extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             comment: ''
//         }

//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     componentWillUnmount() {
//         this.props.clearModalInfo();
//     }

//     handleSubmit(e) {
//         e.preventDefault();
//         let thisComment = {
//             comment: this.state.comment,
//             // username: this.props.info.username,
//             // userId: this.props.info.userId,
//         }
//         debugger;
//         this.props.createComment(this.props.info._id, thisComment);
//         this.setState({ comment: '' })
//     }

//     handleChange(e) {
//         this.setState({ comment: e.target.value })
//     }

//     render() {
//         let { info, comments } = this.props;

//         let commentFeed;

//         if (Object.values(comments).length === 0) {
//             commentFeed = null;
//         } else {
//             commentFeed = (
//                 <div>
//                     {Object.values(comments).map((comment, idx) => {
//                         return <CommentItem 
//                                     key={idx} 
//                                     comment={comment} 
//                                     updateComment={this.props.updateComment}
//                                     currentUser={this.props.currentUser}
//                                     deleteComment={this.props.deleteComment}
//                                 />
//                     })}
//                 </div>
//             )
//         }

//         return (
//             <div className="comment-modal-outer-container">
//                 <div className="comment-dreams-container" >
//                     <div className="comment-goals" >
//                         <p className="comment-goals-info" >
//                             <Link to={`/users/${info.userId}`} className="comment-goals-info-link" style={{ textDecoration: 'none' }}>
//                                 {info.username}
//                             </Link>
//                         </p>
//                         <p className="comment-goals-info" >{info.text}</p>
//                         <form className="comment-form" onSubmit={this.handleSubmit} >
//                             <label className="comment-label" >
//                                 <textarea className="comment-input"
//                                     type="text"
//                                     placeholder="Leave your comment here"
//                                     value={this.state.comment}
//                                     onChange={this.handleChange}
//                                 />
//                             </label>
//                             <div className="comment-btn-container">
//                                 <input className="comment-btn" type="submit" value="Create Comment" onClick={this.handleSubmit} />
//                             </div>
//                         </form>
//                         <div className="comment-feed-container" >{commentFeed}</div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

// export default CommentGoalModal;