import {Triangle} from 'react-loader-spinner';

function Spinner() {
  return (
    <div className='spinner'>
      <Triangle
        height="80"
        width="80"
        color="hsl(238, 40%, 52%)"
        ariaLabel="triangle-loading"
        visible={true}
      />
    </div>
  );
}

export default Spinner;
