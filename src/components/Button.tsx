
import { AiOutlineSearch } from 'react-icons/ai';
interface ButtonProps{
    disabled:boolean;
    onClick:()=>void
}
export default function Button({disabled,onClick}:ButtonProps) {
  return (
    <button
            disabled={disabled}
            onClick={onClick}
            className="bg-white px-4 rounded-full hover:bg-blue-200"
          >
            <AiOutlineSearch />
          </button>
  )
}
