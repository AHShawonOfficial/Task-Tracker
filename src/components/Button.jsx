const Button = ({ onClick, color, text }) => {
   return (
      <button
         onClick={onClick}
         className='btn'
         style={{ backgroundColor: color }}
      >
         {text}
      </button>
   );
};

Button.defaultProps = {
   color: 'steelblue',
};

export default Button;
