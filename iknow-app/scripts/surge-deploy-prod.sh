env-cmd -f ./environments/.dev.prod react-scripts build 

cd ./build/
mv index.html 200.html 

surge $(PWD) http://iknow.surge.sh