import { Col, Row } from 'antd'
import Body from '@/pages/detail/Body'
import Head from '@/pages/detail/Head'
import BookRoom from '@/pages/detail/BookRoom'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from '@/utils/axios'
import useSWR from 'swr'
import { useDispatch } from 'react-redux'
import { dateDayStartEnd, getRoom, quantityPeople } from '@/slice/roomSlice'

const axiosGet = async (url: string) => {
  return axios.get(url).then((response) => {
    return response
  })
}
const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [canFetch, setCanFetch] = useState(false)
  const { data, error } = useSWR(
    canFetch ? `/rooms/${id}` : null,
    axiosGet,
  )
  useEffect(() => {
    setCanFetch(true)
  }, [])

  useEffect(() => {
    if (error) console.error(error)
  }, [error])

  useEffect(() => {
    if (!data) return
    dispatch(quantityPeople(0))
    dispatch(dateDayStartEnd({ days: 0, startDate: '', timeEnd: '' }));
    dispatch(getRoom(data.result));
  }, [data])
  return (
    <>
      <div className="mb-20">
        <Head />
        <div className="container">
          <div className="w-full lg:w-10/12 mx-auto">
            <Row gutter={{ lg: 24 }} >
              <Col lg={12}>
                <Body />
              </Col>
              <Col lg={12}>
                <BookRoom />
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  )
}
export default Detail;
