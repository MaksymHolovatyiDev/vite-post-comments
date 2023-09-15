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
  Comments: Comment[];
  replied: boolean;
}

export interface UseId extends Pick<Comment, '_id'> {}

export interface AddComment extends Pick<Comment, 'text'> {}

export interface CommentButtons {
  setEdit: (data: boolean | ((data: boolean) => boolean)) => void;
  setShowReply: (data: boolean | ((data: boolean) => boolean)) => void;
  setOpenModal: (data: boolean) => void;
  currentUser: boolean;
}

export interface CommentVote extends Pick<Comment, 'vote' | '_id'> {}

export interface Edit
  extends Pick<CommentButtons, 'setEdit'>,
    Pick<Comment, 'text' | '_id'> {}

export interface EditReq extends Pick<Comment, '_id' | 'text'> {}

export interface AddUserComment extends Pick<Comment, 'text'> {
  data?: {text: string; _id?: string};
  setShowReply?: (data: boolean | ((data: boolean) => boolean)) => void;
  addComment: (data: string) => void;
}

export interface BasicModalProps extends Pick<Comment, '_id'> {
  open: boolean;
  setOpen: (data: boolean) => void;
}
