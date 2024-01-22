import { Catalog } from 'components/Catalog/catalogExport';
import { useSelector } from 'react-redux';
import { selectFavoriteCars } from 'redux/selectors';

export default function FavoritesPage() {
  const cars = useSelector(selectFavoriteCars);

  return (
    <div>
      <Catalog cars={cars} />
    </div>
  );
}
