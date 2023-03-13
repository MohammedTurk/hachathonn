import { useState, useCallback, ReactNode } from "react";

type Props = {
  initialComponent: ReactNode;
};
export const useJobDetails = ({ initialComponent }: Props) => {
  const [components, setComponents] = useState([
    { key: 0, element: initialComponent },
  ]);
  const [counter, setCounter] = useState(1);

  const handleAddComponent = useCallback(
    (newComponent: ReactNode) => {
      setComponents([...components, { key: counter, element: newComponent }]);
      setCounter(counter + 1);
    },
    [components, counter]
  );

  const handleRemoveComponent = useCallback(
    (key: number) => {
      const newComponents = components.filter(
        (component) => component.key !== key
      );
      setComponents(newComponents);
    },
    [components]
  );

  return [handleAddComponent, handleRemoveComponent, components] as const;
};

export default useJobDetails;
