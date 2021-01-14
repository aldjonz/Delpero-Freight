import Link from 'next/link';

const button = (props) => (
    <a target="_blank"><Link href={props.link}><button className={props.className}>{props.text}</button></Link></a>
);

export default button;