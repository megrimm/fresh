/*
 GLSL fragment shader implementing the one line synthesis pattern.
 http://countercomplex.blogspot.com/2011/10/algorithmic-symphonies-from-one-line-of.html
*/
uniform float amount;

#extension GL_EXT_gpu_shader4 : enable
const int width = 512; // assumes you're drawing at 512x512
void main() {
	int t = int(gl_FragCoord.y) * width + int(gl_FragCoord.x);
	int c = t*5&(t>>7)|t*3&(t*4>>10);// miiro
	gl_FragColor = vec4(vec3(float(c % 256) / 256.), 1.);
}
