import img from './error.gif';

const ErrorMessage = () => {
   return (
      // <img src={process.env.PUBLIC_URL + '/error.gif'} alt="Ошибка." />
      // (строка выше) этот вариант используется если картинка находится в папке public
      <img
         src={img}
         alt="Ошибка."
         style={{
            display: 'block',
            width: '250px',
            height: '250px',
            objectFit: 'contain',
            margin: '0 auto',
         }} />
   );
}

export default ErrorMessage;