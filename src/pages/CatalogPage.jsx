import { CatalogFilter, Catalog } from 'components/Catalog/catalogExport';
import { useSelector } from 'react-redux';
import { selectCars } from 'redux/selectors';

export default function CatalogPage() {
  const cars = useSelector(selectCars);

  return (
    <div>
      <CatalogFilter />
      <Catalog cars={cars} />
    </div>
  );
}
