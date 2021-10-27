env-cmd -f ./environments/.dev.env react-scripts build 

cd ./build/
mv index.html 200.html 

surge $(PWD) http://iknow-hom.surge.sh