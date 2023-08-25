import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../assets/style/Home.css';

function CarDetails() {
  const { carId } = useParams();

  const cars = useSelector((state) => state.car.data);

  const car = cars.find((car) => car.id === parseInt(carId));

  if (!car) {
    return <div>Car not found</div>;
  }

  return (
    <div className="container container-2">
      <img src={car.main_image} className='main-img' alt={car.name} />
      <div>
        <p>Model: {car.name}</p>
        <p>Price: ${car.price}</p>
        <img src={car.front_image} className='car-img' alt={car.name} />
        <Link to={`/reservation/${car.id}`} className="nav-link">
          <button>Make Reservation</button>
        </Link>
      </div>
    </div>
  );
}

export default CarDetails;
