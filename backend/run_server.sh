minikube start

echo "Waiting for Minikube to start..."
minikube status --wait=true

minikube ssh -- "
  ngrok http --url=foxhound-grateful-endlessly.ngrok-free.app 192.168.49.2:30002
" 


