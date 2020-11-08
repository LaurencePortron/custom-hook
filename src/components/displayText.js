export default function DisplayText(props) {
  const { text } = props;
  return (
    <div>
      <h1 className='title'>Welcome to my livecoding</h1>
      <div className='textbox'>
        <p>{text}</p>
      </div>
    </div>
  );
}
