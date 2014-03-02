// took this example from
// http://www.lighthouse3d.com/opengl/glsl/index.php?minimal

// ++++++++++++++++++++++++
//	Flatten shader.
// ++++++++++++++++++++++++

//	set the z coordinate to zero prior to applying the modelview transformation
//	gl_Vertex is a predefined variable 
//	that usually goes with gl_ModelViewProjectionMatrix * gl_Vertex

void main(void)
	v.z = 0.;
		