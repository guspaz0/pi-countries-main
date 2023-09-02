export function Validate(obj) {
 const { name, difficult, duration, season, country } = obj;
let errors = {}
if (!name) errors = {...errors, name: 'name cannot be null'}
if (name.lenght < 10 || name.length > 30) errors = {...errors, name: 'name must have at least 10 characters and 30 maximum'}
if (name)

if (difficult.isNaN() || difficult < 0 || difficult > 5) errors = {...errors, difficult: 'difficult must be a number between 0 and 5'}

if (!duration || duration === '00:00:00') errors = {...errors, duration: 'duration must be time in hh:mm format and in a range between 00:15 and 10:00'}

if (!season) error = {...errors, season: 'season cannot be null'}

if (!country) errors = {...errors, country: 'select at least one country'}
if (country.length > 20) errors = {...errors, country: '20 countries max' }

return errors
}