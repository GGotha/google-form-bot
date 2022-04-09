contador=0
GOOGLE_FORM_URL='https://docs.google.com/forms/d/e/1FAIpQLSdZDiHCztvOE4SOICzZBPAMWfdYnbMm5WVPiHedSjB-6y0Klg/formResponse?entry.1135870437=Op%C3%A7%C3%A3o%204%20%E2%80%93%20Samsung%20versus%20Apple&draftResponse=%5B1,null,%5B%5Bnull,null,%5B%22Op%C3%A7%C3%A3o%204%20%E2%80%93%20Samsung%20versus%20Apple%22%5D,false,null,null,1135870437%5D%5D,null,%5B%22-9015358315957581321%22%5D%5D'
TIME_BETWEEN_VOTES='0.05'

while :
do
 	curl -X POST $GOOGLE_FORM_URL > /dev/null
	contador=$((contador+1))

	echo "voto computado $contador"

	sleep $TIME_BETWEEN_VOTES
done
