export interface AuthQuery {
  email: string;
  password: string;
  name?: string;
}

export interface AuthorizationData {
  data: {
    name: string;
    type: string;
  }[];
  initialValues: {email: string; password: string; name?: string};
  buttonText: string;
  linkText: string;
  link: string;
}

export interface Comment {
  _id: string;
  text: string;
  createdAt: string;
  vote: number;
  user: {_id: string; name: string};
}

export interface UseId extends Pick<Comment, '_id'> {}

export interface AddComment extends Pick<Comment, 'text'> {}

export interface CommentButtons extends Pick<Comment, '_id'> {
  setEdit: (data: boolean | ((data: boolean) => boolean)) => void;
  setShowReply: (data: boolean | ((data: boolean) => boolean)) => void;
  currentUser: boolean;
}

export interface CommentVote extends Pick<Comment, 'vote' | '_id'> {}

export interface Edit
  extends Pick<CommentButtons, 'setEdit' | '_id'>,
    Pick<Comment, 'text'> {}

export interface EditReq extends Pick<Comment, '_id' | 'text'> {}

export interface AddUserComment extends Pick<Comment, 'text'> {
  data?: {text: string; _id?: string};
  setShowReply?: (data: boolean | ((data: boolean) => boolean)) => void;
  addComment: (data: string) => void;
}