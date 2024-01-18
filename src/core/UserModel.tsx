import { Clone, useGLTF } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { useBaseScene } from ".";
import { useEffect, useRef } from "react";
import { Group } from "three";

type Props = {
  model_url: string;
  props: GroupProps;
};

export default function UserModel({ model_url, props }: Props) {
  const { scene } = useGLTF(model_url);
  const { setModelRef } = useBaseScene();
  const ref = useRef<Group | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    setModelRef(ref.current);

    return () => {
      setModelRef(null);
    };
  }, [model_url]);

  return (
    <group ref={ref} {...props} dispose={null}>
      <Clone object={scene} />
    </group>
  );
}
