
import PropTypes from 'prop-types';
import Gym from '../Gym/Gym';


const Gyms = () => {
    const gyms = [
        {
          id: 1,
          name: "FitZone Gym",
          price: 45.00,
          features: [
            "Cardio equipment",
            "Strength training machines",
            "Group fitness classes",
            "Personal trainers",
            "Locker rooms"
          ]
        },
        {
          id: 2,
          name: "HealthHub Fitness",
          price: 55.00,
          features: [
            "Cardio equipment",
            "Strength training machines",
            "Yoga and Pilates classes",
            "Nutrition counseling",
            "Sauna and steam room",
            "Indoor track"
          ]
        },
        {
          id: 3,
          name: "PureGym",
          price: 30.00,
          features: [
            "Cardio equipment",
            "Strength training machines",
            "24/7 access",
            "No long-term contracts",
            "Free Wi-Fi"
          ]
        },
        {
          id: 4,
          name: "BodyFit Wellness Center",
          price: 60.00,
          features: [
            "Cardio equipment",
            "Strength training machines",
            "Group fitness classes",
            "Personal trainers",
            "Swimming pool",
            "Childcare services"
          ]
        },
        {
          id: 5,
          name: "ActiveLife Gym",
          price: 40.00,
          features: [
            "Cardio equipment",
            "Strength training machines",
            "Group fitness classes",
            "Sauna and steam room",
            "Outdoor training area",
            "Nutrition seminars"
          ]
        },
        {
          id: 5,
          name: "ActiveLife Gym",
          price: 40.00,
          features: [
            "Cardio equipment",
            "Strength training machines",
            "Group fitness classes",
            "Sauna and steam room",
            "Outdoor training area",
            "Nutrition seminars"
          ]
        }
      ];
      
      
    return (
        <div>
            <h1 className='px-4 text-xl font-bold bg-slate-200 w-fit mb-2 rounded-lg '>Best Prices in the Town</h1>
            <div className='grid grid-cols-3 gap-4 px-4'>
                {
                    gyms.map((gym, idx) => <Gym key={idx} gym = {gym}></Gym>)
                }
            </div>
        </div>
    );
};

Gyms.propTypes = {
    
};

export default Gyms;