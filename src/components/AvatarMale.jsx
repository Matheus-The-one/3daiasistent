import React from "react";
import { useGLTF } from "@react-three/drei";

export function AvatarMale(props) {
  const { nodes } = useGLTF("/models/untitled.glb");

  return (
    <group {...props} dispose={null}>
      <primitive object={nodes.Hips} />
      <skinnedMesh
        name="Wolf3D_Body"
        geometry={nodes.Wolf3D_Body.geometry}
        material={nodes.Wolf3D_Body.material}
        skeleton={nodes.Wolf3D_Body.skeleton}
      />
      <skinnedMesh
        name="Wolf3D_Outfit_Bottom"
        geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
        material={nodes.Wolf3D_Outfit_Bottom.material}
        skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
      />
      <skinnedMesh
        name="Wolf3D_Outfit_Footwear"
        geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
        material={nodes.Wolf3D_Outfit_Footwear.material}
        skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
      />
      <skinnedMesh
        name="Wolf3D_Outfit_Top"
        geometry={nodes.Wolf3D_Outfit_Top.geometry}
        material={nodes.Wolf3D_Outfit_Top.material}
        skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
      />
      <skinnedMesh
        name="Wolf3D_Hair"
        geometry={nodes.Wolf3D_Hair.geometry}
        material={nodes.Wolf3D_Hair.material}
        skeleton={nodes.Wolf3D_Hair.skeleton}
      />
      <skinnedMesh
        name="Wolf3D_Head"
        geometry={nodes.Wolf3D_Head.geometry}
        material={nodes.Wolf3D_Head.material}
        skeleton={nodes.Wolf3D_Head.skeleton}
      />
      <skinnedMesh
        name="Wolf3D_Teeth"
        geometry={nodes.Wolf3D_Teeth.geometry}
        material={nodes.Wolf3D_Teeth.material}
        skeleton={nodes.Wolf3D_Teeth.skeleton}
      />
    </group>
  );
}

useGLTF.preload("/models/untitled.glb");

