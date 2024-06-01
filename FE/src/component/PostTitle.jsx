import React from 'react';
import '../styles/Post.css'

function PostTitle() {
    return (
        <tr class="article_title">
            <th class="board_title">번호</th>
            <th class="board_title">제목</th>
            <th class="board_title">글쓴이</th>
            <th class="board_title">댓글수</th>
        </tr>
    );
}

export default PostTitle;