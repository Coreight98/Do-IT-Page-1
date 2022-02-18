export interface ImgProps {
  url: string;
}
export interface ImgAltProps extends ImgProps {
  alt: string;
}

export interface LoginProps {
  type: string;
}

export interface DateProps {
  year: number;
  month: number;
}

export interface DateAction {
  type: "increment" | "decrement";
}

interface BasicAtomProps {
  width?: string;
  height?: string;
  borderColor?: string;
}

export interface BasicButtonProps extends BasicAtomProps {
  backGroundColor?: string;
  title?: string;
  onClick?: () => void;
}

export interface LoginButtonProps extends BasicButtonProps {
  grid?: string;
  color?: string;
  fontSize?: string;
  radius?: string;
}

export interface BasicInputProps extends BasicAtomProps {
  margin?: string;
  padding?: string;
  placeholder?: string;
  background?: string;
  radius?: string;
  shadow?: string;
  type?: string;
  inputRef?: any;
  onChange?: () => void;
}

export interface BoardType {
  boardType: string;
  apiSrc: string;
  pageSrc?: string;
}

export interface BoardContentType {
  board: string;
  title: string;
  text: string;
  date: string;
  images: string[];
  writer: string;
}

export interface RankingContentType {
  rating: number;
  tier: string;
  name: string;
}

export interface RankingCardProps extends RankingContentType {
  ranking: number;
  onClick: () => void;
}
