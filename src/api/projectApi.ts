import { ProjectType } from '../types/project';
import { server, requestHeaders } from './settings';

export const getProjectList = () => fetch(`${server}/api/project/`,
{
    headers: requestHeaders,
    method: 'get',
}).then(response => response.json());

export const getProject = (_id: string) => fetch(`${server}/api/project/${_id}`,
{
    headers: requestHeaders,
    method: 'get',
});

export const deleteProject = (_id: string) => fetch(`${server}/api/project/${_id}`,
{
    headers: requestHeaders,
    method: 'delete',
});

export const createProject = (params: ProjectType) => fetch(`${server}/api/project/`,
{
    headers: requestHeaders,
    method: 'post',
});

export const updateProject = (params: ProjectType) => fetch(`${server}/api/project/${params._id}`,
{
    headers: requestHeaders,
    method: 'put',
});