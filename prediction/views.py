from django.shortcuts import render
from django.http import HttpResponse
import pandas as pd
import joblib

model=joblib.load('./models/RF_Heart_DiseaseModel_Acc_90.pkl')

def index(request):

    return render(request, 'prediction/index.html')

def about(request):
    return render(request, 'prediction/about.html')


def predict(request):
    temp={}
    pred = {}
    return render(request, 'prediction/predict.html', pred)


def predictDisease(request):
    temp={}
    temp['age'] = request.GET['age']
    # print(request.GET['age'])

    temp['sex']=request.GET['sex']
    temp['cp']=request.GET['cp']
    temp['trestbps']=request.GET['trestbps']
    temp['chol']=request.GET['chol']
    temp['fbs']=request.GET['fbs']
    temp['restecg']=request.GET['restecg']
    temp['thalach']=request.GET['thalach']
    temp['exang']=request.GET['exang']
    temp['oldpeak']=request.GET['oldpeak']
    temp['slope']=request.GET['slope']
    temp['ca']=request.GET['ca']
    temp['thal']=request.GET['thal']
    # print (temp)

    testDtaa=pd.DataFrame({'x':temp}).transpose()
    scoreval= model.predict(testDtaa)[0]
    if scoreval == 0:
        pred = False

        return HttpResponse("false")
    else:

        pred = True
        return HttpResponse("true")


    # print(pred)

    # print (request)
    # if request.method == 'POST':
    #     temp={}
    #     temp['age']=request.POST.get('age')
    #     temp['sex']=request.POST.get('sex')
    #     temp['cp']=request.POST.get('cp')
    #     temp['trestbps']=request.POST.get('trestbps')
    #     temp['chol']=request.POST.get('chol')
    #     temp['fbs']=request.POST.get('fbs')
    #     temp['restecg']=request.POST.get('restecg')
    #     temp['thalach']=request.POST.get('thalach')
    #     temp['exang']=request.POST.get('exang')
    #     temp['oldpeak']=request.POST.get('oldpeak')
    #     temp['slope']=request.POST.get('slope')
    #     temp['ca']=request.POST.get('ca')
    #     temp['thal']=request.POST.get('thal')

    #     # print (temp)


    # testDtaa=pd.DataFrame({'x':temp}).transpose()
    # scoreval= model.predict(testDtaa)[0]
    # if scoreval == 0:
    #     pred = False
    # else:
    #     pred = True
    # context={'pred':pred}
    # return render(request,'prediction/predict.html',context)